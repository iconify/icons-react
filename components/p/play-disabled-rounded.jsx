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
		"content": `<style>.o81gjr5hs {
  fill: currentColor;
  d: path("M15.258 13.177L9.292 7.212q.193-.162.45-.19q.258-.028.5.134l5.837 4.148q.379.242.366.687q-.012.444-.391.686zm2.061 6.3l-4.627-4.639l-2.45 1.572q-.403.267-.823.027T9 15.714v-4.567L4.485 6.631q-.14-.14-.15-.344t.15-.364t.353-.16t.354.16l12.84 12.84q.147.147.157.347q.009.202-.156.367q-.166.16-.357.163q-.191.002-.357-.163");
}
</style><path class="o81gjr5hs"/>`,
		"fallback": "material-symbols-light:play-disabled-rounded",
	});
}

export default Component;
