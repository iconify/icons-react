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
		"content": `<style>.zjw51fyar {
  d: path("M21 20.7h-6.6v-.6c1.5-.27 1.35-1.08.978-2.088L11.4 6.6c-1.5 3.246-4.8 10.656-4.8 12s1.8 1.5 2.4 1.5v.6H3v-.6c1.2 0 2.25-1.416 2.628-2.088L12 3.3c1.38 3.138 4.35 10.68 5.25 13.368S20.13 20.1 21 20.1z");
}
</style><path class="zjw51fyar"/>`,
		"fallback": "token-branded:wampl",
	});
}

export default Component;
