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
		"content": `<style>.b-a31lb2c {
  fill-rule: evenodd;
  d: path("M21 21H3V3h18zM9.133 7.995c-.11 0-.206.07-.24.174l-.774 2.32a.133.133 0 0 0 .126.176h2.247c.09 0 .155.09.126.176l-1.663 4.988a.133.133 0 0 0 .127.176h2.409c.109 0 .206-.07.24-.173l1.665-4.994a.25.25 0 0 1 .24-.173h2.251c.11 0 .206-.07.24-.174l.774-2.32a.133.133 0 0 0-.126-.176z");
}
</style><path clip-rule="evenodd" class="b-a31lb2c"/>`,
		"fallback": "token-branded:tempo",
	});
}

export default Component;
