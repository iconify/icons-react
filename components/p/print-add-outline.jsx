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
		"content": `<style>.ybhv5qbft {
  fill: currentColor;
  d: path("M18.596 20.596v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4.577 9.616h14.846zM7 20v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.85 0 1.425.576t.575 1.424v.82q-.238-.077-.488-.14t-.512-.08v-.577q0-.425-.287-.724t-.713-.299H5.577q-.425 0-.712.288t-.288.713V15H7v-1.538h7.473q-.188.232-.344.473t-.279.527H8V19h5.523q.079.28.221.521q.142.24.287.479zm9-11.385v-3H8v3H7v-4h10v4z");
}
</style><path class="ybhv5qbft"/>`,
		"fallback": "material-symbols-light:print-add-outline",
	});
}

export default Component;
