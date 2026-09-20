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
		"content": `<style>.a917pibcr {
  fill: currentColor;
  d: path("M5 15.116V6q0-.979.563-1.574t1.524-.912T9.322 3.1T12 3q1.458 0 2.728.099t2.223.416t1.501.911T19 6v9.116q0 1.205-.84 2.045q-.839.839-2.044.839l1.192 1.192q.233.233.113.52t-.45.288q-.098 0-.183-.034q-.086-.033-.153-.1L14.769 18H9.231l-1.865 1.866q-.068.067-.153.1q-.086.034-.184.034q-.325 0-.447-.287q-.122-.288.11-.52L7.885 18q-1.206 0-2.045-.84Q5 16.322 5 15.116M6 11h5.5V6.539H6zm6.5 0H18V6.539h-5.5zm-3.204 4.296q.32-.319.32-.796t-.32-.796t-.796-.32t-.796.32t-.32.796t.32.796t.796.32t.796-.32m7 0q.32-.319.32-.796t-.32-.796t-.796-.32t-.796.32t-.32.796t.32.796t.796.32t.796-.32");
}
</style><path class="a917pibcr"/>`,
		"fallback": "material-symbols-light:train-rounded",
	});
}

export default Component;
