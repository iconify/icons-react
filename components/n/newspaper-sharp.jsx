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
		"content": `<style>.saljnbj7k {
  fill: currentColor;
  d: path("M2.5 20.5V4.212l1.175 1.175l1.65-1.675L7 5.387l1.675-1.675l1.65 1.675L12 3.712l1.675 1.675l1.65-1.675L17 5.387l1.675-1.675l1.65 1.675L21.5 4.212V20.5zm1-1h8v-7h-8zm9 0h8v-3h-8zm0-4h8v-3h-8zm-9-4h17V7.308h-17z");
}
</style><path class="saljnbj7k"/>`,
		"fallback": "material-symbols-light:newspaper-sharp",
	});
}

export default Component;
