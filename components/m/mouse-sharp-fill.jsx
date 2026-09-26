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
		"content": `<style>.osmazeb7p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2C15.866 2 19 5.134 19 9L19 15C19 18.866 15.866 22 12 22C8.134 22 5 18.866 5 15L5 9C5 5.134 8.134 2 12 2ZM13 6L11 6L11 9L13 9L13 6Z");
}
</style><path clip-rule="evenodd" class="osmazeb7p"/>`,
		"fallback": "keyline-icons:mouse-sharp-fill",
	});
}

export default Component;
