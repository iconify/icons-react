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
		"content": `<style>.rz-qj7b3c {
  fill: currentColor;
  d: path("M12.998 21.671L3 11.692V3h8.692l9.993 10.004zM6.55 7.558q.421 0 .715-.292t.293-.708q0-.425-.292-.722t-.708-.297q-.425 0-.722.295t-.297.716t.295.715t.716.293");
}
</style><path class="rz-qj7b3c"/>`,
		"fallback": "material-symbols-light:sell-sharp",
	});
}

export default Component;
