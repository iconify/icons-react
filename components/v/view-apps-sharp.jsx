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
		"content": `<style>.ue7hx00py {
  fill: currentColor;
  d: path("M1 20V4l6 1v14zm8-1V5h6v14zm14 1l-6-1V5l6-1zM3 17.625l2-.325V6.7l-2-.35zM11 17h2V7h-2zm10 .65V6.35l-2 .35v10.6zm-18-.025V6.35l2 .35v10.6zM11 17V7h2v10zm10 .65l-2-.35V6.7l2-.35z");
}
</style><path class="ue7hx00py"/>`,
		"fallback": "material-symbols:view-apps-sharp",
	});
}

export default Component;
