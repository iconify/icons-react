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
		"content": `<style>.ynj777e1v {
  fill: currentColor;
  d: path("m10.35 21.808l-.708-.708l1.6-1.6H6v-1h5.242l-1.6-1.6l.708-.708L13.158 19zM14 19.5v-1h4v1zM11.49 5.99q-.22.222-.22.55t.22.548t.55.22t.548-.222t.22-.549t-.222-.547t-.549-.22t-.548.22M6 17V3h12v4.83h.923v3.686H18V17h-5.417l-2.233-2.233L8.117 17z");
}
</style><path class="ynj777e1v"/>`,
		"fallback": "material-symbols-light:mobile-camera-rear-sharp",
	});
}

export default Component;
