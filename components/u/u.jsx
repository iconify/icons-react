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
		"content": `<style>.y59ozxbop {
  fill: var(--svg-color--f7d132, #f7d132);
  d: path("M3 3.621h2.483v13.407c0 .447.453 1.49 1.514 1.49h5.338c.44 0 1.217-.416 1.217-1.49v-3.414l-3.724 3.662v-3.333l3.724-3.438V3.62h2.482v4.593L21 3.621v2.67l-4.966 4.878v3.848c0 1.788-1.036 5.363-6.368 5.363C4.328 20.38 3 16.805 3 15.017z");
}
</style><path class="y59ozxbop"/>`,
		"fallback": "token-branded:u",
	});
}

export default Component;
