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
		"content": `<style>.cfwnp9b4p {
  fill: currentColor;
  d: path("M5.314 18q0-.29.198-.488l12.019-12q.198-.204.466-.214q.269-.01.492.214q.197.198.197.488t-.198.489l-12 12q-.198.198-.488.198t-.489-.198T5.313 18");
}
</style><path class="cfwnp9b4p"/>`,
		"fallback": "material-symbols-light:pen-size-2",
	});
}

export default Component;
