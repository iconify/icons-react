import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v57ckn.css';
import '../../css/l/lvinjf.css';
import '../../css/s/swsrfi.css';
import '../../css/h/hoafol.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-yqhc8a.css';
import '../../css/s/so-to-10.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4hTeXcJA"><path class="v57ckn"/><path class="lvinjf swsrfi"/><path class="hoafol lvinjf"/></mask></defs><path mask="url(#SVG4hTeXcJA)" class="botfzx"/>`,
		"fallback": "line-md:tiktok",
	});
}

export default Component;
