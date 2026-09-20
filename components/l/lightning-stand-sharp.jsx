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
		"content": `<style>.q_s6tygah {
  fill: currentColor;
  d: path("M6.932 20.949Q5.23 20.129 5.23 18.5q0-.956.402-1.527q.401-.571 1.11-.842q-.247.142-.383.42q-.135.278-.135.666q0 .681.447 1.164t1.227.786t1.834.453q1.053.15 2.267.15t2.267-.15t1.834-.453t1.227-.786q.447-.483.447-1.164q0-.388-.135-.666q-.136-.278-.382-.42q.708.271 1.11.842q.401.571.401 1.527q0 1.629-1.7 2.449t-5.069.82t-5.068-.82m1.466-2.477Q7 17.944 7 17.115q0-.817 1.407-1.35T12 15.23q2.204 0 3.602.528T17 17.116q0 .828-1.398 1.356T12 19t-3.602-.528M11.154 14V9.77H9.462l3.384-5.924v4.231h1.693z");
}
</style><path class="q_s6tygah"/>`,
		"fallback": "material-symbols-light:lightning-stand-sharp",
	});
}

export default Component;
