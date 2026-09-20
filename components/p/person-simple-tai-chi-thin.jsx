import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y-b50vv8p {
  fill: currentColor;
  d: path("M128 76a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m92 76a4 4 0 0 1-4 4h-84v33.36l53.58 23A4 4 0 0 1 188 168v48a4 4 0 0 1-8 0v-45.36l-51.22-22L50.68 219a4 4 0 1 1-5.36-6L124 142.22V108H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4");
}
</style><path class="y-b50vv8p"/>`,
		"fallback": "ph:person-simple-tai-chi-thin",
	});
}

export default Component;
