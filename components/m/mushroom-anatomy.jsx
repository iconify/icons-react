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
		"content": `<style>.eknh8dbnq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.066 2.253q3.97.021 6.795 2.531Q21.749 7.35 21.75 11q0 .074-.014.146t-.043.141q-.028.068-.069.129q-.041.062-.093.114q-.053.052-.114.093q-.061.042-.13.07q-.068.028-.14.043T21 11.75h-5.205l.454 7.706l.001.044q0 .932-.659 1.591T14 21.75h-4q-2.25 0-2.25-2.25l.001-.044l.454-7.706H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q2.25 11.074 2.25 11q.001-3.65 2.889-6.216q2.825-2.51 6.795-2.531q.033-.003.066-.003t.066.003m.684 17.997H14q.74 0 .75-.73l-.457-7.77H12.75zm-1.5-8.5H9.707l-.457 7.77q.01.73.75.73h1.25z");
}
</style><path class="eknh8dbnq"/>`,
		"fallback": "uix-solid:mushroom-anatomy",
	});
}

export default Component;
