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
		"content": `<style>.d28np5baw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.268 13.837q.83-3.736 2.709-5.046q1.778-1.239 3.452.08q1.509-3.936 4.228-4.511q3.298-.698 5.101 4.304q1.335-.04 2.419 1.302q1.148 1.421 1.563 3.911q-.016-.094-.055-.182q-.06-.136-.168-.239t-.248-.156q-.139-.054-.288-.05t-.286.065L12 17.179l-8.695-3.864q-.068-.03-.14-.047q-.072-.016-.146-.018t-.146.011t-.142.039t-.132.066q-.062.039-.116.09q-.053.051-.096.112q-.042.06-.072.127q-.031.069-.047.142m19.037.848q.099-.044.182-.114t.142-.162t.09-.196t.031-.213v3.5q0 .109-.031.213t-.09.196t-.142.162t-.182.114l-8.999 4q.099-.044.181-.115q.083-.071.142-.162t.09-.195t.031-.213v-3.013zM11.25 18.487l-8.555-3.802q-.136-.06-.239-.168t-.156-.248q-.05-.13-.05-.269v3.5q0 .109.031.213t.09.196t.142.162t.182.114l8.999 4q-.099-.044-.181-.115q-.083-.071-.142-.162t-.09-.195t-.031-.213z");
}
</style><path class="d28np5baw"/>`,
		"fallback": "uix-solid:terrain-3d",
	});
}

export default Component;
