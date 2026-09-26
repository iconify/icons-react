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
		"content": `<style>.vm3b-i-0b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6C2 3.790861 3.790861 2 6 2L18 2C20.209139 2 22 3.790861 22 6L22 18C22 20.209139 20.209139 22 18 22L6 22C3.790861 22 2 20.209139 2 18ZM7.962734 9.105541C7.962734 7.53467 9.690636 6.576985 11.022732 7.409545L16.332265 10.728003C17.272267 11.315504 17.272267 12.684496 16.332265 13.271998L11.022732 16.590456C9.690636 17.423016 7.962734 16.465331 7.962734 14.89446Z");
}
</style><path clip-rule="evenodd" class="vm3b-i-0b"/>`,
		"fallback": "keyline-icons:square-play-fill",
	});
}

export default Component;
