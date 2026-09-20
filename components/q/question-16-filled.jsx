import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fhyltzbye {
  fill: currentColor;
  d: path("M8 2C6.346 2 5 3.346 5 5a.75.75 0 0 0 1.5 0c0-.826.674-1.5 1.5-1.5s1.5.674 1.5 1.5c0 .653-.122 1.018-.254 1.25c-.137.242-.321.41-.601.643l-.051.042c-.26.215-.612.507-.88.939c-.3.483-.464 1.08-.464 1.876v.5a.75.75 0 0 0 1.5 0v-.5c0-.579.116-.888.239-1.085c.136-.219.316-.37.616-.62c.283-.236.66-.553.945-1.053c.29-.51.45-1.145.45-1.992c0-1.654-1.346-3-3-3m0 12.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="fhyltzbye"/>`,
		"fallback": "fluent:question-16-filled",
	});
}

export default Component;
