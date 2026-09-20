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
		"content": `<style>.j2kdzgtxp {
  fill: currentColor;
  d: path("M14.075 20.25q-.275.325-.687.363t-.738-.238l-3.825-3.2q-1.25-1.05-1.8-2.55T6.75 11.55l-1.4-1.175q-.3-.275-.337-.663T5.225 9H4v2q0 .825-.587 1.413T2 13V3q.825 0 1.413.588T4 5v2h2.875l1.55-1.875q.275-.325.688-.363T9.85 5l1.375 1.15q1.525-.575 3.1-.3t2.825 1.325l3.825 3.2q.325.275.363.688t-.238.712z");
}
</style><path class="j2kdzgtxp"/>`,
		"fallback": "material-symbols:nest-cam-iq-outdoor-sharp",
	});
}

export default Component;
