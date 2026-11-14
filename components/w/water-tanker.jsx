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
		"content": `<style>.nqdjmacbl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 4.75h-4q-1.968 0-3.359 1.391T1.75 9.5t1.391 3.359T6.5 14.25h4q1.891 0 3.25-1.285v2.785H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.938q-.188.531-.188 1.25q0 2.75 2.75 2.75t2.75-2.75q0-.719-.188-1.25h5.376q-.188.531-.188 1.25q0 2.75 2.75 2.75t2.75-2.75q0-.719-.188-1.25H21.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V12q0-.134-.047-.26q-.046-.126-.134-.228l-3-3.5q-.106-.125-.256-.193q-.149-.069-.313-.069h-3.568q-.347-.883-1.073-1.609Q12.468 4.75 10.5 4.75m7 11h3.25v-3.473L18.155 9.25H15.25v6.5z");
}
</style><path class="nqdjmacbl"/>`,
		"fallback": "uix-solid:water-tanker",
	});
}

export default Component;
