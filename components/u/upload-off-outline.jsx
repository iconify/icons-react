import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an5ryy.css';
import '../../css/c/c5xdmn.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/g/gzedbu.css';
import '../../css/t/tp2lab.css';
import '../../css/b/botfzx.css';
import '../../css/k/k7c9jh.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDAgtwcqg"><path class="an5ryy c5xdmn zxndow"/><path class="c5xdmn okiwoc zxndow"/><path class="c5xdmn gzedbu tp2lab"/></mask></defs><path mask="url(#SVGDAgtwcqg)" class="botfzx"/><path class="c5xdmn k7c9jh tp2lab"/>`,
		"fallback": "line-md:upload-off-outline",
	});
}

export default Component;
