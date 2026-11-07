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
		"content": `<style>.onkl9wnnp {
  fill: currentColor;
  d: path("M8 14.535V9c0-1.737.989-3.465 2.725-3.962l7-2c1.737-.495 3.31.673 3.945 2.243c.22.546.332 1.13.33 1.719v9a4.001 4.001 0 1 1-2-3.465V9.387l-10 3.334V18a4.001 4.001 0 1 1-2-3.465M20 7a2.6 2.6 0 0 0-.185-.97c-.237-.587-.832-1.271-1.54-1.068l-7 2c-.374.106-.674.361-.887.68A2.44 2.44 0 0 0 10 9v1.613l10-3.334Z");
}
</style><path class="onkl9wnnp"/>`,
		"fallback": "coolicons:music-notes-double-fill-round",
	});
}

export default Component;
