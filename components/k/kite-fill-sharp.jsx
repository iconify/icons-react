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
		"content": `<style>.ba90tlbzc {
  fill: currentColor;
  d: path("M11 2.465V8H2.697ZM13 8V2.465L21.303 8Zm-2 2v5a1 1 0 0 0 2 0v-5h8.414l-8.367 8.367c.068.241.221.443.41.603c.427.36 1.002.551 1.536.685C16.29 19.979 17.669 20 19 20a1 1 0 0 1 0 2c-2.399 0-6.463-.087-7.679-2.57a3.1 3.1 0 0 1-.294-.989L2.586 10Z");
}
</style><path class="ba90tlbzc"/>`,
		"fallback": "coolicons:kite-fill-sharp",
	});
}

export default Component;
