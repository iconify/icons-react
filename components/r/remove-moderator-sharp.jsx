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
		"content": `<style>.auxzre_6c {
  fill: currentColor;
  d: path("M18.042 15.473L7.377 4.796L12 3.077l7 2.615V11.1q0 1.025-.22 2.102t-.738 2.271m1.758 5.743l-3.288-3.289q-.893 1.071-2.065 1.868T12 20.961q-3.148-.932-5.074-3.727T5 11.1V6.416L2.862 4.277l.707-.708l16.939 16.939z");
}
</style><path class="auxzre_6c"/>`,
		"fallback": "material-symbols-light:remove-moderator-sharp",
	});
}

export default Component;
