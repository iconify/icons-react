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
		"content": `<style>.f3-gchbny {
  fill: currentColor;
  d: path("m10.704 13.258l-5.014-2.03q-.267-.105-.379-.316t-.111-.431t.124-.436t.391-.32l12.03-4.552q.236-.1.463-.038t.392.227t.226.392q.062.227-.038.462l-4.592 12.018q-.101.254-.312.381t-.433.127t-.438-.122t-.319-.387z");
}
</style><path class="f3-gchbny"/>`,
		"fallback": "material-symbols-light:near-me-rounded",
	});
}

export default Component;
