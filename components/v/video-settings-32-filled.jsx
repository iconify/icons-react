import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ok8c5bblt {
  fill: currentColor;
  d: path("M2 9.5A4.5 4.5 0 0 1 6.5 5h10A4.5 4.5 0 0 1 21 9.5v11c0 2.026-1.34 3.74-3.18 4.304q.178-.876.18-1.804a9 9 0 0 0-16-5.657zm27.996-.746c0-1.814-2.036-2.882-3.529-1.852L22.5 9.642v10.716l3.968 2.74c1.492 1.03 3.528-.038 3.528-1.852zM4.343 19.037a1.52 1.52 0 0 1-1.117 1.927l-1.536.351a7.5 7.5 0 0 0-.04 3.189l1.698.423a1.52 1.52 0 0 1 1.096 1.893l-.496 1.724a7.5 7.5 0 0 0 2.75 1.596l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.513a1.52 1.52 0 0 1 1.117-1.928l1.536-.35a7.5 7.5 0 0 0 .04-3.19l-1.698-.423a1.52 1.52 0 0 1-1.096-1.892l.496-1.724a7.5 7.5 0 0 0-2.75-1.597l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM11 23a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="ok8c5bblt"/>`,
		"fallback": "fluent:video-settings-32-filled",
	});
}

export default Component;
