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
		"content": `<style>.olbyjqbeo {
  fill: currentColor;
  d: path("m18 20l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 13.4L18 12l4 4zm-7.6-9L17 7.15V5h-.25L10.4 8.675L4.225 5H4v2.2zm-6.525 6q-.775 0-1.325-.55T2 15.125V4.875q0-.775.55-1.325T3.875 3h13.25q.775 0 1.325.55T19 4.875V10.1q-.25-.05-.5-.075T18 10q-2.45 0-4.225 1.763T12 16q0 .25.025.5t.075.5z");
}
</style><path class="olbyjqbeo"/>`,
		"fallback": "material-symbols:outgoing-mail",
	});
}

export default Component;
