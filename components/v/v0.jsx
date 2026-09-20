import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":512,"height":244};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jje4q_b3b {
  d: path("M195.048 174.857V48.762h48.762v160.762c0 18.935-15.35 34.286-34.286 34.286c-9.041 0-17.966-3.486-24.381-9.902L0 48.762h68.952zM512 195.047h-48.762V83.429l-111.62 111.62h111.62v48.762H336.762c-37.871 0-68.572-30.701-68.572-68.572V48.762h48.762v112l112-112h-112V0h126.475C481.3 0 512 30.7 512 68.571z");
}
</style><path class="jje4q_b3b"/>`,
		"fallback": "logos:v0",
	});
}

export default Component;
