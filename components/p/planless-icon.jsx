import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":298};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqm1lfj_u {
  fill: var(--svg-color--ff6254, #ff6254);
  d: path("m126.67 171.379l92.426 38.603l-207.46 86.009C3.686 299.23.3 296.893.02 288.682L0 287.526v-59.598c0-3.386 1.923-6.492 4.77-8.047l.882-.418zM256 109.072v78.898l-93.424-36.57c-1.33-.339-1.994-1.694-1.994-2.71c0-.846.462-1.928 1.385-2.46zM0 9.869C0 1.124 3.042-1.735 10.58.997l1.056.407l207.46 86.348l-92.426 38.264L5.652 78.271C2.63 77.039.432 74.129.057 70.557L0 69.467z");
}
</style><path class="dqm1lfj_u"/>`,
		"fallback": "logos:planless-icon",
	});
}

export default Component;
