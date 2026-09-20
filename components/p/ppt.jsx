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
		"content": `<style>.db1mkv1ua {
  fill: var(--svg-color--1e375e, #1e375e);
  d: path("M11.053 20.688V6.316H15.5c.17 0 .288.138.288.302v7.922c0 .164-.118.304-.28.304h-2.56v5.844c0 .164-.128.312-.297.312h-1.348c-.207-.01-.252-.136-.252-.312m-.948-5.846h-1.58a.323.323 0 0 1-.315-.292V6.618c0-.164.145-.302.315-.302h1.58zm0-10.422c0 .78.95 1.42 2.132 1.42s2.131-.64 2.131-1.42c0-.788-.949-1.42-2.131-1.42c-1.183 0-2.132.64-2.132 1.42");
}
</style><path class="db1mkv1ua"/>`,
		"fallback": "token-branded:ppt",
	});
}

export default Component;
