import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/z/zdhnw2bqe.css';
import '../../css/f/fua2itvrq.css';
import '../../css/t/tpyv5ekyq.css';
import '../../css/i/ibq2yhrjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="zdhnw2bqe"/><path class="fua2itvrq"/><path class="tpyv5ekyq"/><path class="ibq2yhrjv"/></g>`,
		"fallback": "streamline-cyber:music-playlist-1",
	});
}

export default Component;
