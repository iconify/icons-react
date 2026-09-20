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
		"content": `<style>.btwlh4bku {
  fill: currentColor;
  d: path("M3 4.75A.75.75 0 0 1 3.75 4h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 4.75M9.5 11a2.5 2.5 0 0 1 5 0v4.75a.75.75 0 0 0 1.5 0V11a4 4 0 0 0-8 0v4.75a.75.75 0 0 0 1.5 0zm10.75 1.5H17V11h3.25a.75.75 0 0 1 0 1.5m-16.5 0H7V11H3.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm6.75-7h3v1.5h-3z");
}
</style><path class="btwlh4bku"/>`,
		"fallback": "fluent:text-position-behind-24-regular",
	});
}

export default Component;
