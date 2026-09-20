import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":104};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ftkb3bs2x {
  fill: var(--svg-color--3474ab, #3474ab);
  d: path("M149.545 43.027S22.535-30.675 11.558 15.164c-10.979 45.84-23.326 80.678 10.507 87.12c33.833 6.441 127.48-59.257 127.48-59.257");
}

.w35ba22li {
  fill: var(--svg-color--4289c7, #4289c7);
  d: path("M127.588 31.942c36.38-18.832 108.456-51.103 116.695-16.928c11.085 45.99 23.54 80.978-10.25 87.548c-23.712 4.6-77.04-26.493-106.616-45.368c-.043-22.342.214-3.232.171-25.252");
}
</style><path class="ftkb3bs2x"/><path class="w35ba22li"/>`,
		"fallback": "logos:jhipster-icon",
	});
}

export default Component;
