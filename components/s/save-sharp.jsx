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
		"content": `<style>.lzbybqbqs {
  fill: currentColor;
  d: path("M20 7.423V20H4V4h12.577zm-6.587 8.534q.587-.582.587-1.414t-.582-1.418t-1.413-.586t-1.419.581T10 14.535t.582 1.418t1.414.587t1.417-.582M6.77 9.769h7.423v-3H6.77z");
}
</style><path class="lzbybqbqs"/>`,
		"fallback": "material-symbols-light:save-sharp",
	});
}

export default Component;
