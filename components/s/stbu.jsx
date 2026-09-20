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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.fzfyzgkha {
  fill: var(--svg-color--47b9ff, #47b9ff);
  d: path("M18.273 10.91H21V8.182h-2.727z");
}

.u-71gwbhr {
  fill: var(--svg-color--20242f, #20242f);
  d: path("M12.818 10.91h1.637v3.817c0 3.682 3.42 4.364 5.182 4.364c.6 0 .818-.13.818-.13v-3.143h-.338c-.71 0-1.844-.283-1.844-1.516V4.909h-3.818v3.273h-1.637zm-5.416 5.198A4.67 4.67 0 0 1 4.587 15L3 17.471s1.653 1.62 4.418 1.62c2.858 0 5.128-1.669 5.128-3.545c0-2.378-2.946-3.142-4.473-3.688c-.742-.261-1.255-.403-1.255-.676c0-.382.497-.59 1.053-.59c1.55 0 2.618.896 2.618.896l1.271-2.619s-1.309-1.254-3.889-1.254c-2.553 0-4.598 1.227-4.598 3.294c0 2.357 2.29 3.257 3.829 3.835c.79.3 1.353.545 1.353.873c0 .365-.497.49-1.053.49");
}
</style><g class="ft5dv1b6b"><path class="u-71gwbhr"/><path class="fzfyzgkha"/></g>`,
		"fallback": "token-branded:stbu",
	});
}

export default Component;
