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
		"content": `<style>.avu27cbag {
  fill: currentColor;
  d: path("M5.308 19.577q-.65 0-1.114-.463t-.463-1.115t.463-1.113t1.114-.463h13.384q.65 0 1.114.464T20.269 18t-.463 1.114t-1.114.462zm0-12q-.65 0-1.114-.463t-.463-1.115t.463-1.113t1.114-.463h13.384q.65 0 1.114.464T20.269 6t-.463 1.114t-1.114.462zm0 6q-.65 0-1.114-.463t-.463-1.115t.463-1.113t1.114-.463h13.384q.65 0 1.114.464T20.269 12t-.463 1.114t-1.114.462zm1.347-7.002q.23-.234.23-.578q0-.345-.233-.575q-.234-.23-.578-.23t-.575.234t-.23.577t.234.575t.577.23t.575-.233m0 6q.23-.234.23-.578q0-.345-.233-.575q-.234-.23-.578-.23t-.575.234t-.23.577t.234.575t.577.23t.575-.233m0 6q.23-.234.23-.578q0-.345-.233-.575q-.234-.23-.578-.23t-.575.233t-.23.578t.234.575t.577.23t.575-.233");
}
</style><path class="avu27cbag"/>`,
		"fallback": "material-symbols-light:storage-rounded",
	});
}

export default Component;
