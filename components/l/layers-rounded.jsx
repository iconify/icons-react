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
		"content": `<style>.cik3-66vv {
  fill: currentColor;
  d: path("M5.121 13.408q-.188-.146-.195-.384t.182-.403q.14-.104.311-.104t.312.104l5.885 4.552q.173.135.384.135t.385-.135l5.884-4.552q.14-.104.312-.104t.311.104q.189.166.182.403t-.195.384l-5.885 4.558q-.453.348-.994.348t-.994-.348zm5.885.738l-4.75-3.687q-.622-.484-.622-1.267t.622-1.267l4.75-3.686q.453-.348.994-.348t.994.348l4.75 3.686q.622.485.622 1.267t-.622 1.268l-4.75 3.686q-.453.348-.994.348t-.994-.348");
}
</style><path class="cik3-66vv"/>`,
		"fallback": "material-symbols-light:layers-rounded",
	});
}

export default Component;
