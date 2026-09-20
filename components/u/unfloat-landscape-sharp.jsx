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
		"content": `<style>.sghek9bfu {
  fill: currentColor;
  d: path("M2 20V4h20v7h-7v9ZM6 8v6h2v-2.575l3.075 3.075l1.425-1.425L9.4 10H12V8Zm11 12v-7h5v7Z");
}
</style><path class="sghek9bfu"/>`,
		"fallback": "material-symbols:unfloat-landscape-sharp",
	});
}

export default Component;
