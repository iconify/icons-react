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
		"content": `<style>.u2ddqmf7i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.293 2.293C20.579 2.007 21.009 1.921 21.383 2.076C21.756 2.231 22 2.596 22 3V21C22 21.552 21.552 22 21 22H3C2.596 22 2.231 21.756 2.076 21.383C1.921 21.009 2.007 20.579 2.293 20.293L20.293 2.293ZM13.414 12L20 18.586V5.414L13.414 12Z");
}
</style><path clip-rule="evenodd" class="u2ddqmf7i"/>`,
		"fallback": "keyline-icons:triangle-right-split-sharp-fill",
	});
}

export default Component;
