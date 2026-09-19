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
		"content": `<style>.om_jlf06o {
  fill: currentColor;
  d: path("M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97c.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96z");
}
</style><path class="om_jlf06o"/>`,
		"fallback": "ic:round-download-done",
	});
}

export default Component;
