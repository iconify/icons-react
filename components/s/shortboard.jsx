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
		"content": `<style>.hb86ebbbi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.744 11.532q-.638-5.104-3.683-8.53q-.03-.033-.063-.063q-.055-.049-.119-.086q-.063-.037-.133-.062q-.07-.024-.143-.034t-.147-.006t-.145.023t-.138.051t-.126.077t-.108.1q-3.045 3.426-3.683 8.53q-.592 4.738 1.039 9.224q.04.109.11.2t.165.158t.204.101q.111.035.226.035h5q.115 0 .226-.035q.11-.034.204-.101q.095-.066.165-.158q.07-.091.11-.2q.348-.957.595-1.926l3.101.413q.149.02.295-.019q.145-.039.264-.132q.059-.045.107-.101t.085-.12q.036-.064.06-.135q.023-.07.032-.143t.004-.147t-.025-.145q-.019-.071-.053-.137q-.033-.066-.078-.124l-3.19-4.102q-.006-1.195-.158-2.406m.035 4.691l1.004 1.291l-1.168-.155q.099-.566.164-1.136");
}
</style><path class="hb86ebbbi"/>`,
		"fallback": "uix-solid:shortboard",
	});
}

export default Component;
