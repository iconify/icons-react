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
		"content": `<style>.u_yj4umck {
  fill: currentColor;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 17C22 17.5523 21.5523 18 21 18L7.4142 18L3.7071 21.7071C3.5196 21.8946 3.2652 22 3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM11 9.4142L11 14L13 14L13 9.4142L14.5858 11L16 9.5858L12.7071 6.2929C12.3166 5.9024 11.6834 5.9024 11.2929 6.2929L8 9.5858L9.4142 11Z");
}
</style><path class="u_yj4umck"/>`,
		"fallback": "keyline-icons:message-square-arrow-up-sharp-fill",
	});
}

export default Component;
