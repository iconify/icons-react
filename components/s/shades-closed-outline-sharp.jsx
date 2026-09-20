import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ezdyl40xr {
  fill: currentColor;
  d: path("M3 22V4H2V2h20v2h-1v18h-2.125q-.325-.875-1.1-1.437T16 20q-1.025 0-1.787.563T13.125 22H10.85q-.3-.875-1.075-1.437T8 20q-1.025 0-1.8.563T5.1 22zm2-3q.425-.325.938-.537T7 18.124V4H5zm4-.875q.575.125 1.075.35t.925.575V4H9zm4 .9q.425-.35.925-.562T15 18.124V4h-2zm6 0V4h-2v14.125q.575.125 1.075.338t.925.562M7 4H5zm4 0H9zm4 0h-2zm4 0h-2zm-6 0h-2z");
}
</style><path class="ezdyl40xr"/>`,
		"fallback": "material-symbols:shades-closed-outline-sharp",
	});
}

export default Component;
