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
		"content": `<style>.ulu_j5s2a {
  fill: currentColor;
  d: path("m15.062 12.53l-.708-.718l3.396-2.62L12 4.742l-2.696 2.07l-.708-.72L12 3.462l7.385 5.73zm2.163 2.159l-.72-.72l2.076-1.592l.804.634zm2.921 7.18l-5.308-5.307L12 18.742l-7.385-5.73l.804-.635L12 17.462l2.1-1.633l-1.425-1.42l-.675.514l-7.385-5.73l1.594-1.26l-4.468-4.458l.713-.713l18.4 18.4zM11.83 9.312");
}
</style><path class="ulu_j5s2a"/>`,
		"fallback": "material-symbols-light:layers-clear-outline-sharp",
	});
}

export default Component;
