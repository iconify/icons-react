import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/d/d9oh_7bzj.css';
import '../../css/r/r6i_8lg7z.css';
import '../../css/f/f69f52bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="d9oh_7bzj"/><path class="r6i_8lg7z"/><path class="f69f52bpe"/></g>`,
		"fallback": "streamline-cyber:money-bag-1",
	});
}

export default Component;
