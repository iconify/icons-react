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
		"content": `<style>.mkwe8qb4g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4.25Q2.25 4.25 2.25 7v10q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-7.189L10.03 4.47q-.105-.106-.243-.163T9.5 4.25zm2.165 6.329l3-1.5q.078-.039.163-.059T10.5 9t.172.02t.163.059l2.665 1.332l2.665-1.332q.066-.033.137-.052q.071-.02.145-.025t.147.004t.143.032t.134.06t.12.085t.101.107t.079.125q.079.158.079.335v5q0 .104-.029.205q-.028.1-.083.189t-.132.16t-.171.117l-3 1.5q-.078.039-.163.059T13.5 17t-.172-.02t-.163-.059L10.5 15.589l-2.665 1.332q-.133.067-.282.077q-.149.011-.29-.036q-.142-.048-.254-.145q-.113-.098-.18-.232q-.079-.158-.079-.335v-5q0-.104.029-.205q.028-.1.083-.189t.132-.16t.171-.117");
}
</style><path class="mkwe8qb4g"/>`,
		"fallback": "uix-solid:map-folder",
	});
}

export default Component;
