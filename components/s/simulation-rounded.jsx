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
		"content": `<style>.l5r-kcc7e {
  fill: currentColor;
  d: path("M12 13.846q1.512 0 2.448.567t.937 1.493q0 .211-.134.345t-.345.134H9.094q-.211 0-.345-.134t-.133-.345q0-.927.936-1.494T12 13.846M10.809 12.5q-.501-.501-.501-1.191t.5-1.192q.502-.5 1.192-.5t1.191.5t.501 1.192q0 .69-.5 1.191q-.502.5-1.192.5t-1.191-.501m-8.79 4.482V7.404q0-1.195 2.51-1.796Q7.042 5.006 12 5.006t7.47.602q2.51.602 2.51 1.796v9.577q-.038.782-.922 1.388q-.885.606-2.524.954q-.534.125-.938-.236q-.404-.36-.404-.895v-8.119q0-.477.3-.845q.3-.369.777-.474q1.025-.252 1.684-.584t.953-.743q-.787-.713-3.05-1.07T12 6q-3.67 0-6.029.386q-2.36.385-2.877 1.041q.256.412.915.746q.658.335 1.722.587q.477.111.777.474t.3.839v8.12q0 .534-.404.885q-.404.35-.939.245q-1.638-.348-2.523-.954q-.884-.605-.923-1.388");
}
</style><path class="l5r-kcc7e"/>`,
		"fallback": "material-symbols-light:simulation-rounded",
	});
}

export default Component;
