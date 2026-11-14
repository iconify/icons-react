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
		"content": `<style>.dyezukbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v4.1m-2.914 4.899L9 13q-.147 0-.294-.014t-.291-.044q-.145-.028-.286-.071t-.277-.099t-.266-.126t-.253-.152q-.122-.081-.236-.175t-.218-.198t-.198-.218t-.175-.236t-.152-.253q-.069-.13-.126-.266t-.099-.277q-.043-.141-.071-.286q-.029-.144-.044-.291T6 10M4.5 4.5l15 15");
}
</style><path class="dyezukbuc"/>`,
		"fallback": "uix:no-hooks",
	});
}

export default Component;
