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
		"content": `<style>.woj0byf7h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.479 6.967Q2.75 10.35 2.75 16q0 3.25 3.25 3.25h12q3.25 0 3.25-3.25q0-5.65-2.729-9.033Q15.927 3.75 12 3.75T5.479 6.967M12 7.625q3.333 0 5.386 1.232q.063.038.118.088t.099.109t.075.126t.05.138t.021.146q.004.073-.007.146t-.036.143t-.063.133t-.088.118q-.049.055-.109.099q-.059.044-.126.075q-.066.032-.138.05t-.146.021t-.146-.007t-.143-.036t-.133-.063Q14.917 9.125 12 9.125t-4.614 1.018q-.063.038-.133.063t-.143.036t-.146.007t-.146-.021t-.138-.05q-.067-.031-.126-.075q-.06-.044-.109-.099q-.05-.055-.088-.118t-.063-.133t-.036-.143t-.007-.146q.003-.074.021-.146t.05-.138q.031-.067.075-.126q.044-.06.099-.109q.055-.05.118-.088Q8.667 7.625 12 7.625");
}
</style><path class="woj0byf7h"/>`,
		"fallback": "uix-solid:swimming-cap",
	});
}

export default Component;
