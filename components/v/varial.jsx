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
		"content": `<style>.p8g4sac9k {
  fill: var(--svg-color--0050ff, #0050ff);
  d: path("M3.465 5.617a.383.383 0 0 0-.403.584l9.156 14.465a.385.385 0 0 0 .709-.145c1.104-7.51-1.319-13.116-9.462-14.904m13.896-2.41c.048-.096.209-.062.214.046q.184 3.61 3.369 5.247c.095.049.062.208-.045.213q-3.567.184-5.185 3.406c-.048.096-.208.062-.214-.046q-.184-3.61-3.369-5.247c-.095-.05-.062-.208.045-.213q3.567-.184 5.185-3.407");
}
</style><path class="p8g4sac9k"/>`,
		"fallback": "token-branded:varial",
	});
}

export default Component;
