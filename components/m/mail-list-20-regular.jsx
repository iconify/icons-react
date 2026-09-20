import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g2wn9eb6w {
  fill: currentColor;
  d: path("M11.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-7-2h5.585a1.5 1.5 0 0 0 0 1H4.5A1.5 1.5 0 0 0 3 6.5v.302l7 4.118L14.962 8h1.972l-6.68 3.931a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5V8h.5q.264-.001.5-.085V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4");
}
</style><path class="g2wn9eb6w"/>`,
		"fallback": "fluent:mail-list-20-regular",
	});
}

export default Component;
