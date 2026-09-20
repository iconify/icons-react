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
		"content": `<style>.puulzw_na {
  fill: currentColor;
  d: path("M8 21V7.994h13v8.583L16.577 21zm1-1h7v-4h4V9H9zm-3.988-2.194L2.752 5.01l12.794-2.259l.504 2.864h-1.012l-.31-1.712L3.905 5.829l1.712 9.63V17.7zM14.5 14.5");
}
</style><path class="puulzw_na"/>`,
		"fallback": "material-symbols-light:note-stack-outline-sharp",
	});
}

export default Component;
